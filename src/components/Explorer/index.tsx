import { useSignal, useSignalEffect } from '@preact/signals-react'
import {
  getNamedType,
  GraphQLField,
  GraphQLInputField,
  GraphQLNamedType,
  GraphQLSchema,
  isInputObjectType,
  isObjectType,
  isScalarType,
} from 'graphql'
import { memo, useCallback, useState } from 'react'

type ExplorerProps = {
  schema?: GraphQLSchema
}

export const Explorer = memo(({ schema }: ExplorerProps) => {
  const [els, setEls] = useState<JSX.Element[]>()

  const t = useSignal<
    Array<{
      name: string | undefined
      // eslint-disable-next-line @typescript-eslint/ban-types
      def: GraphQLNamedType | GraphQLField<{}, {}, {}> | GraphQLInputField | undefined
      isField?: boolean
    }>
  >([])

  const handleCLick = useCallback(
    (
      name: string | undefined,
      // eslint-disable-next-line @typescript-eslint/ban-types
      def: GraphQLNamedType | GraphQLField<{}, {}, {}> | GraphQLInputField | undefined,
      isField?: boolean,
    ) => {
      t.value = [
        ...t.value,
        {
          name,
          def,
          isField,
        },
      ]
    },
    [t],
  )

  // eslint-disable-next-line sonarjs/cognitive-complexity
  useSignalEffect(() => {
    const def = t.value.at(-1)?.def
    const isField = t.value.at(-1)?.isField
    const result: JSX.Element[] = []

    if (isScalarType(def)) {
      result.push(
        <div key={def.name}>
          <div>{def.name}</div>
          <div>{def.description}</div>
        </div>,
      )

      setEls(result)
    }

    if (isObjectType(def) || isInputObjectType(def)) {
      let Arguments: JSX.Element[] | undefined
      const fields = def.getFields()

      for (const key in fields) {
        const field = fields[key]
        const { name, description, type } = field

        const Type = (
          <span onClick={() => handleCLick(getNamedType(type).name, getNamedType(type))}>
            {type.toJSON()}
          </span>
        )

        const Name = (
          <span
            onClick={() => {
              handleCLick(name, field, true)
            }}
          >
            {name}
          </span>
        )

        if ('args' in field) {
          const { args } = field

          Arguments = args.map((arg, i) => {
            const def = getNamedType(arg.type)
            const name = def.name

            return (
              <span key={arg.name}>
                {arg.name}
                {': '}
                <span onClick={() => handleCLick(name, def)}>{arg.type.toJSON()}</span>
                {args.length > 1 && args.length !== i + 1 && ' '}
              </span>
            )
          })
        }

        if (Arguments?.length) {
          result.push(
            <div key={name}>
              {Name}: ({Arguments}): {Type}
              <div>{description}</div>
            </div>,
          )
        } else {
          result.push(
            <div key={name}>
              {Name}: {Type}
              <div>{description}</div>
            </div>,
          )
        }
      }

      setEls(result)
    }

    if (isField && def && 'type' in def) {
      const { type } = def
      const Type = (
        <span onClick={() => handleCLick(getNamedType(type).name, getNamedType(type))}>
          {type.toJSON()}
        </span>
      )

      result.push(
        <div key={def.name}>
          Type
          <div>{Type}</div>
        </div>,
      )

      if ('args' in def) {
        const { args } = def

        args.length > 0 &&
          result.push(
            <div key='args'>
              Arguments
              {args.map(({ type, name }) => {
                return (
                  <div key={name}>
                    {name}:{' '}
                    <span onClick={() => handleCLick(getNamedType(type).name, getNamedType(type))}>
                      {type.toJSON()}
                    </span>
                  </div>
                )
              })}
            </div>,
          )
      }

      setEls([
        <div key='els'>
          <div>{def.name}</div>
          <div>{def.description}</div>
          {result}
        </div>,
      ])
    }
  })

  return (
    <div>
      <div
        onClick={() => {
          if (t.value.at(-1)?.name === 'Query') {
            setEls(undefined)
          }

          t.value.pop()
          t.value = [...t.value]
        }}
      >
        back
      </div>
      {els ?? (
        <span>
          query:{' '}
          <span
            onClick={() =>
              handleCLick(schema?.getQueryType()?.name, getNamedType(schema?.getQueryType()))
            }
          >
            Query
          </span>
        </span>
      )}
    </div>
  )
})
