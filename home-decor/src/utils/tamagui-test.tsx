import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@/themes/tamagui.config';

const Providers = ({ children }: PropsWithChildren) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};

const baseRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { baseRender as render };
