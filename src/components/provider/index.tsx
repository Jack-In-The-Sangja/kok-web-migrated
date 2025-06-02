import QueryProvider from './query-provider';
import ThemeProvider from './theme-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
