
<template>
    <n-form :model="formValue" ref="loginRef" label-placement="left" :rules="rules">
        <n-form-item label="姓名" path="username">
            <n-input v-model:value="formValue.username" placeholder="请输入姓名" />
        </n-form-item>
        <n-form-item label="密码" path="password">
            <n-input type="password" v-model:value="formValue.password" show-password-toggle placeholder="请输入密码"></n-input>
        </n-form-item>
        <n-form-item>
            <n-button @click="confirm" type="info" block>确认</n-button>
        </n-form-item>
    </n-form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
interface FormState {
    username: String,
    password: String
}
export default defineComponent({
    setup() {
        const formValue = ref<FormState>({
            username: '',
            password: ''
        })
        const confirm = ()=>{
            console.log(formValue.value);  
        }
        return {
            formValue,
            rules: {
            username: [
                {
                    required: true,
                    validator(rule: Object, value: String){
                        if(!value){
                            return new Error("请填写姓名！")
                        } else if(!/^\w{8}$/){
                            return new Error("请填写正确的用户名")
                        }
                        return true
                    },
                    trigger: ['input','blur']
                }
            ],
            password: [
                {
                    required: true,
                    message: "请输入密码！",
                    trigger: ['input','blur']
                },
            ]
        },
            confirm
        }
    }
})
</script>