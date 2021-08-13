import * as Antd from "antd";
import sec23 from "./sec23.png";
import styles from "@/pages/ch1/textarea.css";
// 文章组件
export default () => (
  <Antd.Typography className={styles.textarea}>
    <Antd.Typography.Title>西气东输工程全线开工</Antd.Typography.Title>
    <Antd.Typography.Text>
      <div>
        <p>2002年7月4日，西气东输工程开工典礼在北京隆重举行。由英荷壳牌、埃克森美孚、
          俄罗斯天然气工业股份公司等组成的投资集团和中国石油天然气股份有限公司等共同投
          资建设西气东输工程，中方控股。工程西起新疆轮南，途经10个省、自治区、直辖市，
          全长4000公里，设计年输气量120亿立方米，管道工程投资400多亿元，上、中、下游
          投资总额约1400多亿元。管道工程经过戈壁沙漠、黄土高原、太行山脉，穿过黄河、淮
          河、长江，是我国目前距离最长、投资最多、输气量最大、施工条件最复杂的输气管道。
          自2000年8月国务院批准西气东输工程立项以来，有关方面在西气东输工程建设领导小
          组的组织协调下，做了大量深入细致的工作，圆满完成了各项前期准备。它的开工建设
          ，标志着西部大开发和能源结构调整又迈出了重大步伐。
        </p>
        <img className={styles.img} src={sec23}alt=""/>
      </div>
    </Antd.Typography.Text>
  </Antd.Typography>
);
