<template>
  <div class="home">
    <!-- <div class="detail-list">
      <a-row type="flex" justify="center">
        <a-col :span="8">
          <div class="detail-list-term">平台资金池</div>
          <div class="detail-list-content">12312321</div>
        </a-col>
        <a-col :span="8">
          <div class="detail-list-term">投资余额</div>
          <div class="detail-list-content">21312312</div>
        </a-col>
      </a-row>
    </div> -->
    <a-divider />
    <a-form id="components-form-demo-validate-other" :form="form">
      <a-form-item
        label="平台资金池"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <span>{{ platCapital }}</span>
      </a-form-item>
      <a-form-item
        label="投资账户"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input v-model="investAccount" placeholder="投资账户" />
        <a-button
          class="withdraw-btn"
          type="primary"
          html-type="submit"
          @click="handleUpdateBalance"
        >
          更新余额
        </a-button>
      </a-form-item>
      <a-form-item
        label="账户余额"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <span>{{ investBalance }}</span>
      </a-form-item>

      <a-form-item
        label="当前投资总金额"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <span>{{ currentInvestBalance }}</span>
      </a-form-item>

      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="投资金额"
        extra="360天30%收益"
      >
        <a-input placeholder="Basic usage" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
        <a-button type="primary" html-type="submit">
          转入
        </a-button>
        <a-button class="withdraw-btn" type="primary" html-type="submit">
          转出
        </a-button>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 4 }"> </a-form-item>
    </a-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button, Card, Form, Input, Col, Row, Divider } from "ant-design-vue";
import { getPlatInvest, getUserInvest } from "@/apis";

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Card.name]: Card,
    [Col.name]: Col,
    [Row.name]: Row,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Divider.name]: Divider
  },
  data() {
    return {
      formLayout: "horizontal",
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 10 }
      },
      investAccount: "",
      platCapital: "--",
      investBalance: "--",
      currentInvestBalance: "--"
    };
  },
  created() {
    this.getPlatInvest();
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "validate_other" });
  },
  methods: {
    getPlatInvest() {
      getPlatInvest()
        .then(res => {
          this.platCapital = res;
          console.log("res", res);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(err => {});
    },

    getUserInvest() {
      getUserInvest(this.investAccount)
        .then(res => {
          this.investCapital = res;
          console.log("res", res);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(err => {});
    },

    handleUpdateBalance() {
      this.getUserInvest();
    }
  }
};
</script>

<style lang="less" scoped>
.home {
}
.withdraw-btn {
  margin-left: 60px;
}
.withdrawal-balance-detail {
  margin-left: 30px;
  display: inline-block;
}
</style>
