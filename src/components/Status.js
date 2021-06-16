import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Status = ({ matchDocument }) => {
  return (
    <Box padding="4" bg="#FAF1E6">
      <StatGroup>
        <Stat>
          <StatLabel>💸 보유 코인</StatLabel>
          <StatNumber>{matchDocument.coin}</StatNumber>
          {/* <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText> */}
        </Stat>
        <Stat>
          <StatLabel>💳 보유 쿠폰</StatLabel>
          <StatNumber>{matchDocument.coupon}</StatNumber>
          {/* <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText> */}
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Status;
