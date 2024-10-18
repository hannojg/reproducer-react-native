/* eslint-disable @typescript-eslint/ban-types */
import type { HostComponent, ViewProps } from 'react-native'
import type { DirectEventHandler, Double, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes'
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent'

export type VisionCameraComponentType = HostComponent<NativeProps>

export interface NativeProps extends ViewProps {
  onCodeScanned?: DirectEventHandler<
    Readonly<{
      codes: Readonly<
        {
          type: string
          frame?: Readonly<{ x: Double; y: Double; width: Double; height: Double }>
          corners?: Readonly<{ x: Double; y: Double }[]>
        }[]
      >
      frame: Readonly<{ width: Int32; height: Int32 }[]>
    }>
  >
}

export default codegenNativeComponent<NativeProps>('CameraView')
