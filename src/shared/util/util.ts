export class Util {
  constructor() {}
  /**
   * 쿠키에서 특정 이름의 값을 가져오는 함수
   * @param name 쿠키 이름
   * @returns 쿠키 값 또는 undefined
   */
  static getCookie(name: string): string | undefined {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([.$?*|{}()\\[\]\\/\\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );

    console.log('document.cookie : ', document.cookie);
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  /**
   * @deprecated 테스트 필요
   *
   * @description obj1과 obj2의 키를 비교하여 공통적으로 존재하는 키의 값이 같은지 여부를 반환하는 함수
   * 원시타입 만 비교 가능
   * @param obj1
   * @param obj2
   * @returns boolean
   */

  static compareCommonKeys = <T>(
    obj1: Record<string, T>,
    obj2: Record<string, T>,
  ): boolean => {
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    for (const key of keys) {
      if (key in obj1 && key in obj2 && obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };
}
