// !!! DO NOT EDIT !!! Automatically generated file

import type { CoreProxy as CoreProxy1Main } from './1/CoreProxy';
import type { CoreProxy as CoreProxy5Main } from './5/CoreProxy';
import type { CoreProxy as CoreProxy10Main } from './10/CoreProxy';
import type { CoreProxy as CoreProxy420Main } from './420/CoreProxy';
import type { CoreProxy as CoreProxy11155111Main } from './11155111/CoreProxy';
import type { CoreProxy as CoreProxy84531Main } from './84531/CoreProxy';
import type { CoreProxy as CoreProxy84531Competition } from './84531-competition/CoreProxy';
import type { CoreProxy as CoreProxy84531Andromeda } from './84531-andromeda/CoreProxy';
import type { CoreProxy as CoreProxy13370Main } from './13370/CoreProxy';

export type CoreProxyType =
  | CoreProxy1Main
  | CoreProxy5Main
  | CoreProxy10Main
  | CoreProxy420Main
  | CoreProxy11155111Main
  | CoreProxy84531Main
  | CoreProxy84531Competition
  | CoreProxy84531Andromeda
  | CoreProxy13370Main;

export async function importCoreProxy(chainId: number, preset: string = 'main') {
  switch (`${chainId}-${preset}`) {
    case '1-main':
      return import('./1/CoreProxy');
    case '5-main':
      return import('./5/CoreProxy');
    case '10-main':
      return import('./10/CoreProxy');
    case '420-main':
      return import('./420/CoreProxy');
    case '11155111-main':
      return import('./11155111/CoreProxy');
    case '84531-main':
      return import('./84531/CoreProxy');
    case '84531-competition':
      return import('./84531-competition/CoreProxy');
    case '84531-andromeda':
      return import('./84531-andromeda/CoreProxy');
    case '13370-main':
      return import('./13370/CoreProxy');
    default:
      throw new Error(`Unsupported chain ${chainId} for CoreProxy`);
  }
}
