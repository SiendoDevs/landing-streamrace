import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    // Opcional: Recargar la página si el error es crítico
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="flex flex-col items-center justify-center p-6 text-center bg-[#0A0A0A] border border-white/10 rounded-lg max-w-md mx-auto my-4">
          <div className="bg-red-500/10 p-4 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Algo salió mal</h3>
          <p className="text-white/60 text-sm mb-6">
            No pudimos cargar este componente. Por favor, intenta nuevamente.
          </p>
          <Button 
            onClick={this.handleReset}
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-white"
          >
            Reintentar
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
