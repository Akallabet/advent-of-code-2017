import { part1, part2 } from './10'
import input from './input'

const example = `16
10
15
5
1
11
7
19
6
12
4`

const example2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

describe('Day 10: Adapter Array', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(7 * 5)
    expect(part1(example2.split('\n'))).toEqual(220)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(2201)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(8)
    expect(part2(example2.split('\n'))).toEqual(19208)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(169255295254528)
  })
})
