/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-09-29 09:58:45 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-09-29 10:09:51
 * 动画 对象 接管所有动画
 */


function Animation(){
   this._running = false;
   this. _paused = true;// 我觉得暂停 不应哎全局的这个暂停上 而是每一个对象有一个自己的暂停 用于 当时wait的时候用  但是现在为我写的
                        // 这个动画对象不是用与单个运动而是用于 全局动画控制的 一个动画控制器
}

Animation.prototype = {

}