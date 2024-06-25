import styled from "styled-components";
import { useGetUser } from "../features/authentication/useGetUser";

const StyledUserAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const UserImage = styled.img`
  width: 40px;
`;

const User = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;

function UserAndAvatar() {
  const { user } = useGetUser();
  console.log(user);
  return (
    <StyledUserAvatar>
      <User>{user.email}</User>
      <UserImage src="/default-user.png" alt="userImage" />
    </StyledUserAvatar>
  );
}

export default UserAndAvatar;
