import { store } from '@things-factory/shell'
import fileBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    fileBase
  })
}
