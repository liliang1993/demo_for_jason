<template>
  <div class="home">
    <a-card>
      <div class="detail-list">
        <div class="detail-list-title">购买理财</div>
        <a-row type="flex" justify="start">
          <a-col :span="12">
            <div class="detail-list-term">平台资金池</div>
            <div class="detail-list-content">12312321</div>
          </a-col>
          <a-col :span="12">
            <div class="detail-list-term">本人资金池</div>
            <div class="detail-list-content">21312312</div>
          </a-col>
        </a-row>
        <a-form id="components-form-demo-validate-other" :form="form">
          <a-form-item v-bind="formItemLayout" label="Plain Text">
            <span class="ant-form-text">
              China
            </span>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Plain Text">
            <a-input placeholder="Basic usage" />
          </a-form-item>
        </a-form>
      </div>
    </a-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Card, Form, Input, Col, Row } from "ant-design-vue";

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Card.name]: Card,
    [Col.name]: Col,
    [Row.name]: Row,
    [Form.name]: Form,
    [Input.name]: Input
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "validate_other" });
  }
};
</script>
