package net.wezm.snippet

import net.wezm._
import model._

import net.liftweb._
import http._
import SHtml._
import S._

import js._
import JsCmds._

import mapper._

import util._
import Helpers._

import scala.xml.{NodeSeq, Text}

class FrontPage {

  private def toShow = Page.findAll()

  private def doList(html: NodeSeq): NodeSeq = 
   toShow. 
   flatMap(page => 
     bind("page", html,
        "date" -> "1 October, 2009",
        "category" -> "Category",
        "commentCount" -> "No comments"
     ))

  def list(html: NodeSeq) = {
    //val id = S.attr("all_id").open_! 

    // def inner(): NodeSeq = { 
    //   //def reDraw() = SetHtml(id, inner()) 
    // 
    //   bind("todo", html, 
    //      "list" -> doList(html)) 
    // } 
    // 
    // inner() 
    bind("page", html, 
       "list" -> doList(html)) 
    
  }

}
