import { signal } from '@preact/signals-react'
import cx from 'clsx'
import { buildClientSchema } from 'graphql'
import { KeyboardEvent, lazy, Suspense, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { ToastContainer } from 'react-toastify'

import { Preloader } from '@/components'
import { HeaderEditor, QueryEditor, ResponseEditor, VariableEditor } from '@/components/Playground'
import { values } from '@/components/Playground/signals'
import { ChevronDown, ChevronUp, Document, Play } from '@/icons'
import { notify } from '@/lib'
import { useGetSchemaQuery, useLazyGetDataQuery } from '@/store'

const Explorer = lazy(async () => {
  const { Explorer } = await import('@/components/Explorer')

  return {
    default: Explorer,
  }
})

type ActiveTab = 'variables' | 'headers'
const activeTab = signal<ActiveTab | null>(null)
const isCollapsed = signal(true)
const showExplorer = signal(false)

const handleCollapse = (collapsed: boolean) => {
  if (!activeTab.value) {
    activeTab.value = 'variables'
  }

  isCollapsed.value = collapsed
}

export const EditorPage = () => {
  const { data: schema, isFetching } = useGetSchemaQuery()
  const [request, { data, error, isError, isFetching: isLoading }] = useLazyGetDataQuery()
  const { t } = useTranslation()

  const panelRef = useRef<ImperativePanelHandle>(null)

  const expandPanel = useCallback(
    (value: ActiveTab) => () => {
      if (value) {
        activeTab.value = value
      }

      panelRef.current?.expand()
    },
    [],
  )

  const handleChevronClick = useCallback(() => {
    if (!activeTab.value) {
      activeTab.value = 'variables'
    }

    isCollapsed.value ? panelRef.current?.expand() : panelRef.current?.collapse()
  }, [])

  const handleClick = useCallback(() => {
    try {
      const { variables, headers, document } = values.value
      const parsedVariables = variables
        ? (JSON.parse(variables) as Record<string, unknown>)
        : undefined
      const parsedHeaders = headers ? (JSON.parse(headers) as Record<string, string>) : undefined

      if (
        typeof parsedVariables === 'string' ||
        Array.isArray(parsedVariables) ||
        typeof parsedHeaders === 'string' ||
        Array.isArray(parsedHeaders)
      ) {
        throw new TypeError('Is not a JSON object')
      }

      void request({
        document,
        variables: parsedVariables,
        headers: parsedHeaders,
      })
    } catch (error) {
      if (error instanceof Error) {
        notify(`🦄 ${error.message}`)
      }
    }
  }, [request])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.ctrlKey && event.key === 'Enter') {
        handleClick()
      }
    },
    [handleClick],
  )

  if (isFetching) return <Preloader />

  return (
    <>
      <div
        className={cx('grid w-full gap-7 px-3', showExplorer.value ? 'grid-cols-3' : 'grid-cols-2')}
      >
        {showExplorer.value && (
          <Suspense fallback={<Preloader />}>
            <Explorer schema={schema && buildClientSchema(schema)} />
          </Suspense>
        )}
        <PanelGroup
          direction='vertical'
          className='relative ml-2 space-y-1 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
        >
          <Panel
            defaultSize={100}
            className='mt-2 flex space-x-2 px-2'
          >
            <div className='h-full w-full overflow-hidden'>
              <QueryEditor
                schema={schema && buildClientSchema(schema)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='w-10 space-y-2'>
              <button
                onClick={handleClick}
                className='flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia p-2'
              >
                <Play className='fill-white' />
              </button>
              <button
                onClick={() => (showExplorer.value = !showExplorer.value)}
                className='flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia p-2'
              >
                <Document />
              </button>
            </div>
          </Panel>
          <PanelResizeHandle
            className={'flex justify-between border-t-2 p-2 dark:border-t-[rgba(0,_0,_0,_0.1)]'}
          >
            <div className='cursor-default space-x-2 text-deepsea transition-all dark:text-sky'>
              <span
                onClick={expandPanel('variables')}
                className={cx(
                  'inline-block cursor-pointer rounded-md px-3 py-1 hover:bg-slate dark:hover:bg-[rgba(0,_0,_0,_0.1)]',
                  activeTab.value === 'variables' && 'bg-slate dark:bg-[rgba(0,_0,_0,_0.1)]',
                )}
              >
                <div>{t('variables')}</div>
              </span>
              <span
                onClick={expandPanel('headers')}
                className={cx(
                  'inline-block cursor-pointer rounded-md px-3 py-1 hover:bg-slate dark:hover:bg-[rgba(0,_0,_0,_0.1)]',
                  activeTab.value === 'headers' && 'bg-slate dark:bg-[rgba(0,_0,_0,_0.1)]',
                )}
              >
                <div>{t('headers')}</div>
              </span>
            </div>
            <span
              className='flex cursor-pointer items-center justify-center rounded-md px-3 py-1 hover:bg-slate dark:hover:bg-[rgba(0,_0,_0,_0.1)]'
              onClick={handleChevronClick}
            >
              {isCollapsed.value ? <ChevronUp /> : <ChevronDown />}
            </span>
          </PanelResizeHandle>
          <Panel
            collapsible
            ref={panelRef}
            onCollapse={handleCollapse}
            className='px-2'
          >
            <div className='h-full pb-3'>
              <VariableEditor
                onKeyDown={handleKeyDown}
                className={cx(activeTab.value !== 'variables' && 'hidden')}
              />
              <HeaderEditor
                onKeyDown={handleKeyDown}
                className={cx(activeTab.value !== 'headers' && 'hidden')}
              />
            </div>
          </Panel>
        </PanelGroup>
        <div className='relative h-full w-full p-2'>
          {isLoading ? (
            <span className='absolute left-1/2 top-1/2 inline-block h-10 w-10 -translate-x-1/2 -translate-y-1/2 '>
              <span className='inline-block h-full w-full animate-spin rounded-full border-4 border-fuchsia border-t-[rgba(0,_0,_0,_0.1)]' />
            </span>
          ) : (
            <ResponseEditor value={JSON.stringify(isError ? error : data, null, 2)} />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
