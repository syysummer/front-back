import { SocketState } from './socket/types'
import { ConfigState } from './config/types'
import { FilesState } from './files/types'
import { ChartState } from './charts/types'
import { AuthState } from './auth/types'
import { HistoryState } from './history/types'
import { PrinterState } from './printer/types'
import { ServerState } from './server/types'
import { WaitState } from './wait/types'
import { VersionState } from './version/types'
import { ConsoleState } from './console/types'
import { NotificationsState } from './notifications/types'

export interface RootState {
  socket?: SocketState;
  auth?: AuthState;
  config?: ConfigState;
  files?: FilesState;
  charts?: ChartState;
  history?: HistoryState;
  printer?: PrinterState;
  server?: ServerState;
  wait?: WaitState;
  version?: VersionState;
  console?: ConsoleState;
  notifications?: NotificationsState;
}

export type AppNotificationType = 'success' | 'info' | 'warning' | 'error'
