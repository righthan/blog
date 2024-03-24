---
title: JS创建二维数组的注意点
category:
  - 学习小记
tag:
  - JavaScript

contributors: false
editLink: false
comment: false
---

# JS 创建二维数组的注意点

使用 JS 也挺久了，没想到对一些关键函数的使用还是模棱两可，通过创建二维数组踩的许多坑，才进一步了解了数组中 map,fill，拓展运算符使用中需要特别注意的地方，
在 LeetCode 刷题写动态规划的时候，经常需要创建二维的数组，平时使用的大都是下面的方式创建

```typescript
const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
```

这是正确的写法，但是某次，看着这一大堆 new, fill, map, 我想看看有没有其他写法能简化一些的时候，顺手写了一下数组初始化，然后又忘了这回事，导致了严重的 bug，花了很长时间调试才发现问题

## 1 使用省略第一个 fill 导致的错误

```typescript
const dp: number[][] = new Array(3).map(() => new Array(3).fill(0));
console.log(dp); // [ <3 empty items> ]
```

打印输出之后，发现并不是想象中的二维数组，这是因为 new Array(m)创建之后，数组中的默认内容是空的，map 在遍历的时候，不会对空值进行操作，MDN 上的介绍为“callbackFn 仅在已分配值的数组索引处被调用。它不会在稀疏数组中的空槽处被调用。”,这里的[稀疏数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#%E7%A8%80%E7%96%8F%E6%95%B0%E7%BB%84)，指的是函数 empty item 的数组（empty item 出现的原因可能是直接拉长数组 length, del arr[i]删除元素，还有创建数组未赋值时也会出现）

## 2 使用 fill 直接填充

```typescript
const dp: number[][] = new Array(3).fill(new Array(3).fill(0));
console.log(dp); // [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
```

这段代码看似创建的是正确的二维数组， 实际上是最坑人的！！
先来看一下下面代码的输出结果, 初始化动态规划数组的第一行

```typescript
for (let i = 0; i < 3; i++) {
  dp[0][i] = 1;
}
console.log(dp); // [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]
```

预期输出的结果应该是`[ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]`与预期不符合，但这种方式创建的二维数组，很明显是因为在 fill 中 new Array()只创建了一个数组实例，然后在后面的 fill 过程中使用的都是这个实例，所以导致了错误的结果
查看 fill 函数的介绍，才发现在 MDN 上介绍 fill(value, start, end)方法时，对 fill 的第一个参数做出了特别的说明“用来填充数组元素的值。注意所有数组中的元素都将是这个确定的值：如果 value 是个对象，那么数组的每一项都会引用这个元素。”

## 3 使用扩展展运算符

在看创建多维数组创建的方式时发现了一种使用扩展运算符创建的方法

```typescript
const dp = [...Array(3)].map(() => Array(3).fill(0));
console.log(dp); // [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
```

可以看到确实创建了一个二维数组，但是按照第 1 点中提出的，map 会跳过 empty item，难道使用 Array(3)，创建的数组未赋值时，不是 empty item 吗？

```typescript
console.log(Array(3)); // [ <3 empty items> ]
```

通过 Array(3)创建的数组也是稀疏数组，所以问题出现在扩展运算符上

```typescript
console.log([...Array(3)]); // [undefined, undefined,undefined]
```

通过扩展运算符处理后的数组，empty item 全变成了 undefined, 并且 map 不会跳过 undefined 的位置，查看扩展运算符的使用时，还学到了，扩展运算符和 Object.assign()都是浅拷贝的
