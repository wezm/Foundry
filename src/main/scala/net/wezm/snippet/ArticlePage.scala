package net.wezm.snippet

import _root_.net.liftweb.http._
import S._
import _root_.net.liftweb.util._
import Helpers._
import _root_.scala.xml._

import java.util.Date
import net.liftweb.textile._
import net.liftweb.mapper._

import net.wezm.model._

class ArticlePage {
  // val formatter = new java.text.SimpleDateFormat("yyyy/MM/dd")

  def show (xhtml : NodeSeq) : NodeSeq = {
    val slug = S.param("slug") openOr ""
    Article.find(By(Article.slug, slug)) match {
        case Full(article: Article) => bind("article", xhtml,
        "title" -> article.title,
        "body" -> TextileParser.toHtml(article.body)
        )
        case _ => Text("Unable to find article")
    }
  }
}
