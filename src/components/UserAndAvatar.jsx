import styled from "styled-components";

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
  return (
    <StyledUserAvatar>
      <User>Tomo Bratic</User>
      <UserImage src="/default-user.jpg" alt="userImage" />
    </StyledUserAvatar>
  );
}

export default UserAndAvatar;
