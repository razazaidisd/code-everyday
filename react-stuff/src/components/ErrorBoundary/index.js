import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import DefaultErrorFallback from './DefaultErrorFallback';
import './ErrorBoundary.scss';

const initialState = {
  error: null,
  errorInfo: null,
};
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.logError = this.logError.bind(this);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;
    if (onError) {
      onError();
    }
    this.setState({ error, errorInfo });
    this.logError(error, errorInfo);
  }

  /**
   * logError - to log error in Logging service i.e. newRelic etc
   * @param {object} error
   * @param {object} errorInfo
   * */
  logError(error, errorInfo) {
    const { boundaryName } = this.props;
    // Placeholder for newRelic logging
    return {
      error,
      errorInfo,
      boundaryName,
    };
  }

  resetErrorBoundary() {
    this.setState(initialState);
  }

  render() {
    const { errorInfo, error } = this.state;
    const {
      children,
      boundaryName,
      boundaryClassName,
      fallbackComponent,
      isResetErrorBoundaryEnabled,
      onReset,
    } = this.props;
    if (!error) return children;

    const props = {
      componentStack: errorInfo?.componentStack,
      error,
      boundaryName: boundaryName || 'Unknown',
      isResetErrorBoundaryEnabled: isResetErrorBoundaryEnabled || false,
    };
    if (typeof fallbackComponent === 'function') {
      return fallbackComponent(props);
    }
    return (
      <div className={`error-boundary ${boundaryClassName || ''}`} data-testid="error-boundary">
        <DefaultErrorFallback
          boundaryName={boundaryName}
          error={error}
          componentStack={props.componentStack}
          isResetErrorBoundaryEnabled={props.isResetErrorBoundaryEnabled}
          onReset={onReset || this.resetErrorBoundary}
        />
      </div>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
  onError: PropTypes.func,
  boundaryName: PropTypes.string.isRequired,
  boundaryClassName: PropTypes.string,
  fallbackComponent: PropTypes.func,
  isResetErrorBoundaryEnabled: PropTypes.bool,
  onReset: PropTypes.func,
};

export default ErrorBoundary;
