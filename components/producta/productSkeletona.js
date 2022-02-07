//Modules
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const ProductSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Stack spacing={1} height={180}>
        <Skeleton variant="rectangular" width={124} height={124} />
        <Skeleton variant="text" height={40} />
      </Stack>
    </SkeletonWrapper>
  );
};

export default ProductSkeleton;

const SkeletonWrapper = styled.div`
  .MuiSkeleton-rectangular {
    @media (max-width: 768px) {
      width: 100% !important;
    }
  }
`;
