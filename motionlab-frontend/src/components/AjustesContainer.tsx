import { useNavigate } from 'react-router-dom';
import ButtonRegresar from '../components/ButtonRegresar';
import '../components/Ajustes.css';

interface Props {
  label: string;
  children: React.ReactNode;
  pag_anterior: string;
}

const AjustesContainer = ({ label, children, pag_anterior }: Props) => {
  const navigate = useNavigate();

  const handleRegresar = () => {
    navigate(pag_anterior);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="ajustes-box shadow-lg p-4">
        <div>
          <div className="btn-reg" onClick={handleRegresar}>
            < ButtonRegresar label='< Regresar' />
          </div>

          <div className="ajustes-label position-absolute start-50 translate-middle-x">
            {label}
          </div>
        </div>

        <div className="ajustes-content">
          <div className="h-100 d-flex flex-column justify-content-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjustesContainer;