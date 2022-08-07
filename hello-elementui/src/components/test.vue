<!--
 * @description: 
 * @Author: Wanghf
 * @Date: 2022-08-07 14:56:38
 * @LastEditor: Wanghf
 * @LastEditTime: 2022-08-07 15:25:43
-->
<template>
    <div id="vue">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
        <br/>
        哈哈，这是一个测试页面
    </div>
</template>
<script>
export default {
    data() {
        return {
            radio: '1'
        };
    }
}
</script>