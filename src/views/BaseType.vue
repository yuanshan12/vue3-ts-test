<template>
    <div class="basetype">
        <h2>基本类型</h2>
        <button @click="getLengths">类型断言</button>
    </div>
</template>
<script lang='ts'>
export default {
    setup() {

        // 布尔
        //const isDone: boolean = false

        // 数字 类型推断可以判断出num是数字
        const num = 4
        
        // 数组

        const arr: number[] = [1,2,3]
        const arr1: string[] = ['1','23','4']
        const arr3: Array<number> = [2,4,5]

        // 元组
        // let arr4: [string, number] = [3,'ss'] // error
        const arr4: [string, number] = ['sss', 34]

        // 元组：访问越界元素时（不存在的），会使用联合类型代替，只要满足元组中定义的
        // 类型，都能正常使用

        // 枚举 默认从0开始排序
        enum Color {red, green, blue}
        const c: Color = Color.red
        console.log('ccc', c) // 0

        // 也可手动赋值

        enum Color1 {red1=2, green1, blue1}
        const c1: Color1 = Color1.green1
        console.log('ccc', c1) // 3

        // any 在编程阶段为不清楚类型的变量指定一个类型

        let anyValue: any = 0
        anyValue = 'ss'
        console.log(anyValue)
        // 当数组元素类型存在多样时，可以通过any类型
        const anyArr: any[] = [1, '32', false]


        // 类型断言：当程序员清楚某个变量的类型时
        // 关于类型断言，目前还是使用as较好，不会报错
        function getLength(value: number | string): number{
            // if((<string>value).length) {
            //     return (<string>value).length // 目前报错。。。。
            // } else {
            //     return value.toString().length
            // }

            if((value as string).length) {
                return (value as string).length
            } else {
                return value.toString().length
            }
        }
        function getLengths() {
           const re = getLength('sss')
           console.log(re)
        }

        // const someValue: any = "this is a string";

        // const strLength: number = (<string>someValue).length;


        const someValue: any = "this is a string";

        const strLength: number = (someValue as string).length;




        return {
            getLengths
        }
        

        
    }
}
</script>