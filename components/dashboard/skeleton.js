import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonLoad() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton
          variant="text"
          sx={{ fontSize: "2rem" }}
          width={210}
          animation="wave"
        />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} animation="wave" />
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
          animation="wave"
        />
        <Skeleton variant="rounded" width={210} height={60} animation="wave" />
      </Stack>
    </div>
  );
}
