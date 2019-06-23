---
title: LeetCode 解题之路(一) 两数之和
date: 2019-06-22
category: 个人提升
tags: 
    - LeetCode
    - 编程
vssue-title: leetcode-1
---

1. 两数之和  

<!-- [题目来源](https://leetcode-cn.com/problems/two-sum) -->

* 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

* 解题方法

```javascript
给定 `nums = [2, 7, 11, 15], target = 9`

因为 `nums[0] + nums[1] = 2 + 7 = 9`
所以返回 `[0, 1]`
```

对于这道题，我们首先产生的念头是包里解决法，即两遍 for 循环：

```js
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i]+ nums[j] === target) return [j,i]
        }
    }
};
```

* 结果

```bash
Input data:
[2,7,11,15]
9

Actual
  ✔ runtime: 72 ms
  ✔ answer: [0,1]
  ✔ stdout: ''

Expected
  ✔ runtime: 24 ms
  ✔ answer: [0,1]
  ✔ stdout: ''
```

* 结果分析

时间复杂度O(n^2）, 耗时过长
