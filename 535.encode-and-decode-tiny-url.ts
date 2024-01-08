/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

class Solution {
  private base_url: string = 'http://tinyurl.com'
  private increment: number = 0
  private archive: Map<string, string> = new Map()

  encode(long_url: string): string | undefined {
    if (!this.archive.has(long_url)) return this.archive.get(long_url)

    const id = Number(++this.increment).toString(16)
    const short_url = `${this.base_url}/${id}`

    this.archive.set(long_url, short_url)
    this.archive.set(short_url, long_url)
  }

  decode(short_url: string): string | undefined {
    if (!this.archive.has(short_url)) return void 0

    return this.archive.get(short_url)
  }
}

function encode(long_url: string): string {
  return long_url
}

function decode(short_url: string): string {
  return short_url
}
