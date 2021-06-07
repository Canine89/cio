const UserCoinBoard = ({user, userCoin}) => {
  return <>{user.displayName}님의 현재 코인은 {userCoin}입니다.</>;
};

export default UserCoinBoard;
