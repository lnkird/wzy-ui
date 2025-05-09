<template>
    <div class="preview">
        <div class="preview__demo">
            <slot></slot>
        </div>
        <div class="preview__actions">
            <button class="preview__action" @click="toggleCode">
                {{ showCode ? '隐藏代码' : '显示代码' }}
            </button>
            <button class="preview__action" @click="copyCode" v-if="showCode">
                复制代码
            </button>
        </div>
        <div v-show="showCode" class="preview__code">
            <pre><code class="language-vue" ref="codeRef">{{ code }}</code></pre>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { Message } from '../message'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'highlight.js/lib/languages/javascript'
import 'highlight.js/lib/languages/xml'
import 'highlight.js/lib/languages/css'

const props = defineProps<{
    code: string
}>()

const showCode = ref(false)
const codeRef = ref<HTMLElement>()

const toggleCode = () => {
    showCode.value = !showCode.value
    if (showCode.value) {
        nextTick(() => {
            highlightCode()
        })
    }
}

const copyCode = () => {
    navigator.clipboard.writeText(props.code).then(() => {
        Message({
            type: 'success',
            message: '代码已复制到剪贴板'
        })
    })
}

const highlightCode = () => {
    if (codeRef.value) {
        hljs.highlightElement(codeRef.value)
    }
}

onMounted(() => {
    if (showCode.value) {
        highlightCode()
    }
})
</script>

<style scoped>
.preview {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
}

.preview__demo {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.preview__actions {
    padding: 8px 20px;
    background-color: #fafafa;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}

.preview__action {
    background: none;
    border: none;
    color: #409eff;
    cursor: pointer;
    font-size: 14px;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.3s;
}

.preview__action:hover {
    background-color: #ecf5ff;
}

.preview__code {
    background-color: #fafafa;
    padding: 20px;
    overflow: auto;
}

.preview__code pre {
    margin: 0;
}

.preview__code code {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
}
</style>