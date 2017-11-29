<template>
  <div>
    <h4>Universal自动贴片机、锡膏印刷机、SONY检查机等共17台SMT汰旧设备转让</h4>
    <img src="http://www.srmmx.com/upload/AuctionPicture/2017/9/26/ddd34e1b-465f-43be-9b0a-5f8d91c588de.jpg" height="50%" width="100%">
   <!--  <cell primary="content">
      <div class="timeline">
        <timeline>
          <timeline-item>
            <p class="recent">已结束</p>
            <p class="recent">2017-10-20 11:30</p>
          </timeline-item> 
          <timeline-item>
            <p>竞价预计结束时间</p>
            <p>2017-10-20 11:20</p>
          </timeline-item> 
          <timeline-item>
            <p>竞价开始时间</p>
            <p>2017-10-20 10:50</p>
          </timeline-item>
          <timeline-item>
            <p>保证金缴纳截止时间</p>
            <p>2017-10-19 17:30</p>
          </timeline-item>
          <timeline-item>
            <p>报名截止时间</p>
            <p>2017-10-13 17:30</p>
          </timeline-item>
        </timeline>
      </div>
    </cell> -->
    <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
       <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
       <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
       <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
       <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
       <flow>
      <flow-state title="报名" is-done></flow-state>
      <flow-line tip="2017/09/01 15:30 截止" tip-direction="top" :line-span="60" process-span="60" ></flow-line>

      <flow-state title="准备"></flow-state>
      <flow-line></flow-line>

      <flow-state title="竞价"></flow-state>
      <flow-line ></flow-line>

      <flow-state title="结束"></flow-state>
    </flow>
  </div>
</template>

<script>
import { Cell, Timeline, TimelineItem, Step, StepItem, Flow, FlowState, FlowLine } from 'vux'
export default {
  components: {
    Timeline,
    TimelineItem,
    Cell,
    Step,
    StepItem,
    Flow,
    FlowState,
    FlowLine
  },
  data () {
    return {
      count: 3,
      step1: 0
    }
  }
}
</script>

<style lang="less">
.timeline {
  p {
    color: #888;
    font-size: 0.8rem;
  }
  .recent {
    color: rgb(4, 190, 2)
  }
}
</style>
