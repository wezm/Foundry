package net.wezm.snippet

import _root_.net.liftweb.http._
import S._
import _root_.net.liftweb.util._
import Helpers._
import _root_.scala.xml._

import java.util.Date

import net.wezm.model._

class ArticlePage {
  // val formatter = new java.text.SimpleDateFormat("yyyy/MM/dd")

  def show (xhtml : NodeSeq) : NodeSeq = {
    val article: NodeSeq = Article.find(1l) match { // XXX: Hardcoded id, should find from param By(Article.id, 1l)
    	case Empty => Text("Unable to find article")
    	case Full(article: Article) => (
    	  "title" -> Text(article.title),
    	  "body" -> Text(article.body)  // Parse Textile
    )}
    bind("article", xhtml, article)
  }
}
