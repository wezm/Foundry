package net.wezm.snippet

import scala.xml._
import net.liftweb.http._
import net.liftweb.util._
import S._
import SHtml._
import Helpers._
import scala.xml._

import net.wezm.model._

import java.util.Date

class FrontPage {
  val formatter = new java.text.SimpleDateFormat("yyyy/MM/dd")

  def summary (xhtml : NodeSeq) : NodeSeq = {
    val entries : NodeSeq = Article.findAll match {
    	case Nil => Text("You have no pages, go write something") // Add link to create one...
    	case pages => pages.flatMap({page => 
    	  bind("page", chooseTemplate("book", "entry", xhtml),
    	       "title" -> Text(page.title.toString),
    	       "category" -> Text("Bound Category"))
      })
    }
    bind("book", xhtml, "entry" -> entries)
  }
}
