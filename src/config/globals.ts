/**
 * Global, static constants.
 */
export const Globals = Object.freeze({
  APP_NAME: 'fluidd',
  HEADER_HEIGHT: 56,
  DEFAULTS: {
    CAMERA_URL: '/webcam?action=stream'
  },
  NETWORK_REQUEST_TIMEOUT: 0,
  KLIPPY_RETRY_DELAY: 1500,
  SOCKET_RETRY_DELAY: 2000,
  SOCKET_PING_INTERVAL: 10000,
  CONSOLE_HISTORY_RETENTION: 1000, // total count
  CONSOLE_RECEIVE_PREFIX: '',
  CONSOLE_SEND_PREFIX: '$ ',
  CONSOLE_COMMAND_HISTORY: 20,
  CHART_HISTORY_RETENTION: 1200,
  JOB_HISTORY_LOAD: 50,
  KLIPPY_DISCONNECTED_REDIRECT: '/configuration',
  LOCAL_CARDSTATE_STORAGE_KEY: 'cardState', // collapsed or not
  LOCAL_CARDLAYOUT_STORAGE_KEY: 'cardLayout2', // Specific layout / enabled / disabled
  LOCAL_INSTANCES_STORAGE_KEY: 'appInstances',
  MOONRAKER_DB: {
    NAMESPACE: 'fluidd',
    ROOTS: {
      uiSettings: { name: 'uiSettings', dispatch: 'config/initUiSettings' },
      // macros: { name: 'macros', dispatch: 'macros/initMacros' },
      console: { name: 'console', dispatch: 'console/initConsole' },
      charts: { name: 'charts', dispatch: 'charts/initCharts' },
      // cameras: { name: 'cameras', dispatch: 'cameras/initCameras' },
      // layout: { name: 'layout', dispatch: 'layout/initLayout' }
    }
  },
  MOONRAKER_COMPONENTS: {
    auth: { name: 'authorization', dispatch: 'auth/init' },
    power: { name: 'power', dispatch: 'power/init' },
    updateManager: { name: 'update_manager', dispatch: 'version/init' },
    history: { name: 'history', dispatch: 'history/init' }
  },
  // Ordered by weight.
  CONFIG_SERVICE_MAP: [
    { filename: 'moonraker.conf', service: 'moonraker', link: 'https://moonraker.readthedocs.io/en/latest/configuration/' },
    { filename: 'webcam.txt', service: 'webcamd' },
    { filename: 'klipperscreen.conf', service: 'KlipperScreen', link: 'https://klipperscreen.readthedocs.io/en/latest/' },
    { filename: 'mooncord-webcam.json', service: 'webcamd', link: 'https://github.com/eliteSchwein/mooncord' },
    { prefix: 'mooncord', service: 'MoonCord', link: 'https://github.com/eliteSchwein/mooncord' },
    { suffix: '.cfg', service: 'klipper', link: 'https://www.klipper3d.org/Config_Reference.html' }
  ],
  FILTERED_FILES_PREFIX: ['.thumbs', 'thumbs'],
  FILTERED_FILES_EXTENSION: ['.ignoreme'],
  DOCS_ROOT: 'https://docs.fluidd.xyz',
  DOCS_REQUIRED_CONFIGURATION: 'https://docs.fluidd.xyz/configuration/initial_setup',
  DOCS_MULTIPLE_INSTANCES: 'https://docs.fluidd.xyz/configuration/multiple_printers',
  DOCS_MOONRAKER_COMPONENTS: 'https://docs.fluidd.xyz/configuration/moonraker',
  DOCS_AUTH_LOST_PASSWORD: 'https://docs.fluidd.xyz/authorization#lost-password',
  DOCS_AUTH: 'https://docs.fluidd.xyz/authorization'
})

export const Waits = Object.freeze({
  onServiceRestart: 'onServiceRestart',
  onDevicePowerToggle: 'onDevicePowerToggle',
  onHomeAll: 'onHomeAll',
  onHomeXY: 'onHomeXY',
  onHomeX: 'onHomeX',
  onHomeY: 'onHomeY',
  onHomeZ: 'onHomeZ',
  onQGL: 'onQGL',
  onZTilt: 'onZTilt',
  onBedScrewsAdjust: 'onBedScrewAdjust',
  onBedScrewsCalculate: 'onBedScrewsCalculate',
  onPrintPause: 'onPrintPause',
  onPrintCancel: 'onPrintCancel',
  onPrintResume: 'onPrintResume',
  onMacro: 'onMacro',
  onSetSpeed: 'onSetSpeed',
  onSetFlow: 'onSetFlow',
  onSetFanSpeed: 'onSetFanSpeed',
  onSetOutputPin: 'onSetOutputPin',
  onZAdjust: 'onZAdjust',
  onRetract: 'onRetract',
  onExtrude: 'onExtrude',
  onMeshCalibrate: 'onMeshCalibrate',
  onKlipperRestart: 'klipperRestart',
  onKlipperFirmwareRestart: 'klipperFirmwareRestart',
  onSetVelocity: 'onSetVelocity',
  onSetAcceleration: 'onSetAcceleration',
  onSetDeceleration: 'onSetDeceleration',
  onSetSCV: 'onSetSCV',
  onSetRetractLength: 'onSetRetractLength',
  onSetRetractSpeed: 'onSetRetractSpeed',
  onSetUnretractSpeed: 'onSetUnretractSpeed',
  onSetUnretractExtraLength: 'onSetUnretractExtraLength',
  onExtruderChange: 'onExtruderChange',
  onLoadLanguage: 'onLoadLanguage',
  onFileSystem: 'onFileSystem'
})
