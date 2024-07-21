import styled from "styled-components";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Flex from "../../components/Flex";
import { useLogout } from "./useLogout";
import { useUser } from "./useUser";
import { useUpdateUserAvatar } from "./useUpdateUserAvatar";
import { useDeleteUserAvatar } from "./useDeleteUserAvatar";
import toast from "react-hot-toast";
import Grid from "../../components/Grid";

const StyledInput = styled.input`
  height: 45px;
  width: 350px;
  border: 1px solid var(--color-border-gray);
  border-radius: 5px;
  padding-left: 10px;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const ChangeAvatar = styled.div`
  margin-left: 20px;

  @media (max-width: 1550px) {
    margin: 30px auto;
  }
`;

const ChangeUserData = styled.div`
  margin-top: 80px;
  padding-bottom: 30px;
  @media (max-width: 1550px) {
    margin: 30px auto;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: var(--color-primary-blue);
  font-weight: 500;
`;

const ResponsiveFormFlex = styled(Flex)`
  @media (max-width: 1550px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ResponsiveAvatarFlex = styled(Flex)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const UserDataGrid = styled(Grid)`
  @media (max-width: 1550px) {
    grid-template-columns: 1fr;
    gap: 15px;
    place-items: center;
  }
`;

const UserDataHeading = styled(Heading)`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const LogoutButtonFlex = styled(Flex)`
  width: 100%;

  @media (max-width: 1550px) {
    text-align: center;
    justify-content: center;
  }
`;

function UserDataForm() {
  const { user } = useUser();
  const { logout, isLoading } = useLogout();
  const { updateUser, isLoading: isUpdatingUser } = useUpdateUserAvatar();
  const { deleteAvatar, isDeleting } = useDeleteUserAvatar();

  if (isLoading || isUpdatingUser || isDeleting) return <p>loading</p>;

  const { email, phone, userName, avatarUrl } = user?.user_metadata || "";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    updateUser(selectedFile);
  };

  const handleDeleteAvatar = () => {
    const imageName = avatarUrl?.split("/").at(-1);

    if (!imageName) return;

    deleteAvatar(imageName);
  };

  return (
    <ResponsiveFormFlex>
      <ChangeAvatar>
        <ResponsiveAvatarFlex gap="10px" align="center" justify="normal">
          {avatarUrl ? (
            <img src={avatarUrl} height="125px" alt="" />
          ) : (
            <div style={{ backgroundColor: "black" }}>
              <img src="/default-user.png" height="125px" alt="" />
            </div>
          )}
          <Button type="short" onClick={handleDeleteAvatar}>
            remove avatar
          </Button>
          <FileInput onChange={handleFileChange} />
        </ResponsiveAvatarFlex>
      </ChangeAvatar>

      <ChangeUserData>
        <Flex gap="30px" direction="column" wrap="wrap">
          <div style={{ width: "100%" }}>
            <UserDataHeading as="h3" $notaligned={true}>
              User Data
            </UserDataHeading>
            <UserDataGrid columns={2} items="start">
              <StyledInput
                type="text"
                placeholder="User Name"
                disabled={true}
                value={userName || ""}
              />
              <StyledInput
                type="email"
                placeholder="Email"
                disabled={true}
                value={email || ""}
              />
              <StyledInput
                type="tel"
                placeholder="Phone number"
                disabled={true}
                value={phone || ""}
              />
            </UserDataGrid>
          </div>

          <div>
            <Grid items="normal">
              <UserDataHeading as="h3" $notaligned={true}>
                Change password
              </UserDataHeading>
              <UserDataGrid columns={2}>
                <Grid gap="5px" items="start">
                  <Label>Old Password</Label>
                  <StyledInput type="password" placeholder="********" />
                </Grid>
                <Grid gap="5px" items="start">
                  <Label>New Password</Label>
                  <StyledInput type="password" placeholder="********" />
                </Grid>
              </UserDataGrid>
            </Grid>
          </div>

          <LogoutButtonFlex gap="10px" justify="normal">
            <Button onClick={logout}>Logout</Button>
          </LogoutButtonFlex>
        </Flex>
      </ChangeUserData>
    </ResponsiveFormFlex>
  );
}

export default UserDataForm;
