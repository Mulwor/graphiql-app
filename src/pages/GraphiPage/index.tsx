import { signal } from '@preact/signals-react'
import { auth } from '@root/src/firebase.config'
import cx from 'clsx'
import { buildClientSchema } from 'graphql'
import { Fragment, useCallback, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useTranslation } from 'react-i18next'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import { ReactComponent as Play } from '@/assets/play.svg'
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
  const { t } = useTranslation()

  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      navigate('/signup')
    }
  }, [navigate, user])

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
      <div className='grid h-full w-full grid-cols-2 gap-7'>
        <PanelGroup
          direction='vertical'
          className='relative space-y-1 rounded-lg shadow-xl'
        >
          <Panel defaultSize={50}>
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
          <PanelResizeHandle className='bg-seagreen p-2'>
            <div className='space-x-2'>
              <span
                onClick={() => (activeTab.value = 'variables')}
                className={cx(
                  'inline-block cursor-pointer px-3 py-1 text-white transition-all hover:text-prussianblue',
                )}
              >
                <div>{t('graph.firstValue')}</div>
              </span>
              <span
                onClick={() => (activeTab.value = 'headers')}
                className={cx(
                  'inline-block cursor-pointer px-3 py-1 text-white transition-all hover:text-prussianblue',
                )}
              >
                <div>{t('graph.secondValue')}</div>
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
