import { signal } from '@preact/signals-react'
import cx from 'clsx'
import { buildClientSchema } from 'graphql'
import { Fragment, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ImperativePanelHandle, Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { toast, ToastContainer } from 'react-toastify'

import { ReactComponent as Play } from '@/assets/play.svg'
import {
  HeaderEditor,
  QueryEditor,
  ResponseEditor,
  values,
  VariableEditor,
} from '@/components/Playground'
import { ChevronDown, ChevronUp } from '@/icons'
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
      <div className='grid h-full w-full grid-cols-2 gap-7'>
        <PanelGroup
          direction='vertical'
          className='relative space-y-1 rounded-lg shadow-xl'
        >
          <Panel defaultSize={100}>
            <div className='h-full'>
              <QueryEditor
                schema={schema && buildClientSchema(schema)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </Panel>
          <button>
            <Play className='z-1000 absolute right-3 top-7 h-12 w-12 rounded-full bg-fuchsia fill-white p-2' />
          </button>
          <PanelResizeHandle className='flex justify-between bg-seagreen p-2'>
            <div className='space-x-2'>
              <span
                onClick={expandPanel('variables')}
                className={cx(
                  'inline-block cursor-pointer px-3 py-1 text-white transition-all hover:text-prussianblue',
                )}
              >
                <div>{t('graph.firstValue')}</div>
              </span>
              <span
                onClick={expandPanel('headers')}
                className={cx(
                  'inline-block cursor-pointer px-3 py-1 text-white transition-all hover:text-prussianblue',
                )}
              >
                <div>{t('graph.secondValue')}</div>
              </span>
            </div>
            <span
              className='flex cursor-pointer items-center justify-center text-white'
              onClick={handleChevronClick}
            >
              {isCollapsed.value ? <ChevronUp /> : <ChevronDown />}
            </span>
          </PanelResizeHandle>
          <Panel
            collapsible
            ref={panelRef}
            onCollapse={handleCollapse}
          >
            <div className='flex h-full flex-col gap-1'>
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
