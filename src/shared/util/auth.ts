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
}
