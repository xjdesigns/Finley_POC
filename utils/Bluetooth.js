import {useEffect} from 'react';
import {BleManager} from 'react-native-ble-plx';
// export const manager = new BleManager();

export function useBLE() {
  useEffect(() => {
    const manager = new BleManager();
    const subscription = manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        // FnPressable()
        subscription.remove();
      }
    }, true);
    return () => subscription.remove();
  }, []);
}
