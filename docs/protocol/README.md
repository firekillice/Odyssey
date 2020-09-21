# 协议
* 来，大家来商量搞点事情
* 什么是协议，协议在计算机领域的表现就是，计算机之间(或者内部)做事情的规范与标准。


## Acknowledgment
* Positive Acknowledgement: the receiver explicitly notifies the sender which packets, messages, or segments were received correctly. Positive Acknowledgement therefore also implicitly informs the sender which packets were not received and provides detail on packets which need to be retransmitted.(只确认收到的)
* Negative Acknowledgment (NACK): the receiver explicitly notifies the sender which packets, messages, or segments were received incorrectly and thus may need to be retransmitted (RFC 4077).(只确认未收到的)
* Selective Acknowledgment (SACK): the receiver explicitly lists which packets, messages, or segments in a stream are acknowledged (either negatively or positively). Positive selective acknowledgment is an option in TCP (RFC 2018) that is useful in Satellite Internet access (RFC 2488).(确认收到的或者未收到的)
* Cumulative Acknowledgment: the receiver acknowledges that it correctly received a packet, message, or segment in a stream which implicitly informs the sender that the previous packets were received correctly. TCP uses cumulative acknowledgment with its TCP sliding window. (累计确认，即确认一个范围；tcp协议中使用，可见对计算机网络的传输能力还是很有信心的)


## Protocol Data Unit (PDU)
* The PDU of Transport Layer is called as a Segment
* The PDU of Network Layer is called as a Packet
* The PDU of the Data-Link Layer is called Frames