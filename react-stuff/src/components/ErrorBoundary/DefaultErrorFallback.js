import React from 'react';
import PropTypes from 'prop-types';

/**
 * DefaultErrorFallback
 * @param {string} boundaryName - Name of the component
 * @param {object} error - message, componentStack
 * @param {string} componentStack - error stack
 * @param {boolean} resetErrorBoundary - When TRUE 'onReset' is required
 * @param {Function} onReset - Reset component state
 * @return JSX ReactElement
 * */
function DefaultErrorFallback({
  boundaryName,
  error,
  componentStack,
  isResetErrorBoundaryEnabled,
  onReset,
}) {
  const refreshPage = () => {
    window.location.reload();
  };

  const renderResetButton = () => {
    if (isResetErrorBoundaryEnabled) {
      return (
        <button
          type="button"
          onClick={onReset}
          className="btn btn-xs btn-primary pull-right"
        >
          Refresh
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={refreshPage}
        className="btn btn-xs btn-primary pull-right"
      >
        Refresh Application
      </button>
    );
  };

  return (
    <div role="alert">
      <h4>
        The error occurred in the <b>{boundaryName}</b> Component.
        {renderResetButton()}
      </h4>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        <pre className="error-message">{error.message}</pre>
        <pre className="error-trace">{componentStack}</pre>
      </details>
    </div>
  );
}
DefaultErrorFallback.propTypes = {
  boundaryName: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  componentStack: PropTypes.string.isRequired,
  isResetErrorBoundaryEnabled: PropTypes.bool,
  onReset: PropTypes.func,
};

export default DefaultErrorFallback;
