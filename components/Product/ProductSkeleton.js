import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const ProductSkeleton = () => {
  return (
    <Stack spacing={1} height={180}>
      <Skeleton variant="rectangular" width={124} height={124} />
      <Skeleton variant="text" height={40} />
    </Stack>
  );
};

export default ProductSkeleton;
