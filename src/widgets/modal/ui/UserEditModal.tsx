import UserEditFormLayout from '@/widgets/layout/ui/UserEditFormLayout';
import ModalComponent, {
  ModalComponentProps,
} from '@/widgets/modal/ui/ModalComponent';

const modalHeader = 'text-2xl mb-4';
const UserEditModal: React.FC<ModalComponentProps> = props => {
  const { isOpen, onRequestClose, onAfterOpen } = props;

  return (
    <ModalComponent
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={`modal-header ${modalHeader}`}>
        <h2>Edit UserInfo Information</h2>
      </div>
      <div className={`modal-content`}>
        <UserEditFormLayout onSave={onRequestClose} />
      </div>
    </ModalComponent>
  );
};
export default UserEditModal;
