import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

export const EMPTY_DATA_MESSAGE = 'Empty data';

type Props = PropsWithChildren<{ fallback: ReactNode }>;
type State = {
  hasError: boolean;
  shouldRethrow: boolean;
  error?: Error;
};

class EmptyErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, shouldRethrow: false };
  }

  static getDerivedStateFromError(error: Error): State {
    if (error) {
      return {
        error,
        hasError: true,
        shouldRethrow: error.message !== EMPTY_DATA_MESSAGE,
      };
    }

    return { hasError: false, shouldRethrow: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (error) {
      this.setState({
        error,
        hasError: true,
        shouldRethrow: error.message !== EMPTY_DATA_MESSAGE,
      });
    }
  }

  render() {
    if (this.state.hasError && this.state.shouldRethrow) {
      throw this.state.error;
    }

    if (this.state.hasError && !this.state.shouldRethrow) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
export default EmptyErrorBoundary;
