package net.wezm.snippet

import _root_.net.liftweb.http._
import S._
import _root_.net.liftweb.util._
import Helpers._
import _root_.scala.xml._

import java.util.Date
import net.liftweb.textile._

import net.wezm.model._

class ArticlePage {
  // val formatter = new java.text.SimpleDateFormat("yyyy/MM/dd")

  def show (xhtml : NodeSeq) : NodeSeq = {
    //val article = Article.find(By(Article.slug, S.param("permalink"))) match { // XXX: Hardcoded id, should find from param By(Article.id, 1l)
    val article = Article.find(1l) match {
    	case Full(article: Article) => article
    	case _ => return NotFoundResponse()
    }
    
    bind("article", xhtml,
      "title" -> article.title,
      "body" -> TextileParser.toHtml(article.body)
    )
  }
}
