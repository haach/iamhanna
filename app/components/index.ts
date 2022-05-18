export interface ReactProps {
  className?: string;
  key?: string;
  style?: Record<string, string>; // Don't abuse this overwrite backdoor
}
