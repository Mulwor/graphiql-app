import { signal } from '@preact/signals-react'
import cx from 'clsx'
import { buildClientSchema } from 'graphql'
import { Fragment, useCallback } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { toast, ToastContainer } from 'react-toastify'

import {
  HeaderEditor,
  QueryEditor,
  ResponseEditor,
  values,
  VariableEditor,
} from '@/components/Playground'
import { useGetSchemaQuery, useLazyGetDataQuery } from '@/store'

const activeTab = signal<'variables' | 'headers' | null>(null)

export const GraphiPage = () => {
  const { data: schema, isFetching } = useGetSchemaQuery()
  const [request, { data, error, isError }] = useLazyGetDataQuery()

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
          console.dir(error)
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
      <div className='grid h-full w-full grid-cols-2 gap-2'>
        <PanelGroup
          direction='vertical'
          className='space-y-1'
        >
          <Panel defaultSize={50}>
            <div className='h-full'>
              <QueryEditor
                schema={schema && buildClientSchema(schema)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </Panel>
          <PanelResizeHandle className='bg-mainblue p-2'>
            <div className='space-x-2'>
              <span
                onClick={() => (activeTab.value = 'variables')}
                className={cx(
                  'inline-block cursor-pointer rounded-lg px-3 py-1 text-white hover:bg-[#333]',
                )}
              >
                Variables
              </span>
              <span
                onClick={() => (activeTab.value = 'headers')}
                className={cx(
                  'inline-block cursor-pointer rounded-lg px-3 py-1 text-white hover:bg-[#333]',
                )}
              >
                Headers
              </span>
            </div>
          </PanelResizeHandle>
          <Panel defaultSize={50}>
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
