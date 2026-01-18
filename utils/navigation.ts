import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * home 페이지로 이동할 때 스크롤 위치 복원을 위한 플래그 설정
 */
export const navigateToHome = (router: AppRouterInstance) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("restoreHomeScroll", "true");
  }
  router.push("/");
};

