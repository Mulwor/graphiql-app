import { reducer, setupStore } from '@/store'

export type AppDispatch = ReturnType<typeof setupStore>['dispatch']
export type RootState = ReturnType<typeof reducer>
