import { signal } from '@preact/signals-react'
import cx from 'clsx'
import { buildClientSchema } from 'graphql'
import { Fragment, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { toast, ToastContainer } from 'react-toastify'

import {
  HeaderEditor,
  QueryEditor,
  ResponseEditor,
  values,
  VariableEditor,
} from '@/components/Playground'
import { ChevronDown, ChevronUp, Play } from '@/icons'
import { useGetSchemaQuery, useLazyGetDataQuery } from '@/store'

type ActiveTab = 'variables' | 'headers'
const activeTab = signal<ActiveTab | null>(null)
const isCollapsed = signal(true)

const handleCollapse = (collapsed: boolean) => {
  if (!activeTab.value) {
    activeTab.value = 'variables'
  }

  isCollapsed.value = collapsed
}

export const GraphiPage = () => {
  const { data: schema, isFetching } = useGetSchemaQuery()
  const [request, { data, error, isError }] = useLazyGetDataQuery()
  const { t } = useTranslation()

  const panelRef = useRef<ImperativePanelHandle>(null)

  const expandPanel = (value: ActiveTab) => () => {
    if (value) {
      activeTab.value = value
    }

    panelRef.current?.expand()
  }

  const handleChevronClick = () => {
    if (!activeTab.value) {
      activeTab.value = 'variables'
    }

    isCollapsed.value ? panelRef.current?.expand() : panelRef.current?.collapse()
  }

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.ctrlKey && event.key === 'Enter') {
        try {
          const variables = values.value.variables
            ? (JSON.parse(values.value.variables) as Record<string, unknown>)
            : undefined
          const headers = values.value.headers
            ? (JSON.parse(values.value.headers) as Record<string, string>)
            : undefined

          void request({
            document: values.value.document,
            variables,
            headers,
          })
        } catch (error) {
          if (error instanceof Error) {
            toast.error(`🦄 ${error.message}`, {
              theme: 'light',
            })
          }
        }
      }
    },
    [request],
  )

  if (isFetching) return <div>isFetching</div>

  return (
    <Fragment>
      <div className='grid h-full w-full grid-cols-2 gap-7 px-3'>
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
            <div className='w-10'>
              <button className='flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia p-2'>
                <Play className='fill-white' />
              </button>
            </div>
          </Panel>
          <PanelResizeHandle className='flex justify-between border-t-2 p-2'>
            <div className='cursor-default space-x-2 transition-all'>
              <span
                onClick={expandPanel('variables')}
                className={cx(
                  'inline-block cursor-pointer rounded-md px-3 py-1 text-deepsea hover:bg-slate-200',
                  activeTab.value === 'variables' && 'bg-slate-200',
                )}
              >
                <div>{t('graph.firstValue')}</div>
              </span>
              <span
                onClick={expandPanel('headers')}
                className={cx(
                  'inline-block cursor-pointer rounded-md px-3 py-1 text-deepsea hover:bg-slate-200',
                  activeTab.value === 'headers' && 'bg-slate-200',
                )}
              >
                <div>{t('graph.secondValue')}</div>
              </span>
            </div>
            <span
              className='flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-deepsea hover:bg-slate-200'
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
        <div className='w-full'>
          <ResponseEditor value={JSON.stringify(isError ? error : data, null, 2)} />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  )
}
