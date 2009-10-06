package net.wezm.model

import net.liftweb._
import mapper._

class Article extends LongKeyedMapper[Article] with IdPK {
  def getSingleton = Article
  
  object author extends MappedLongForeignKey(this, User)
  object title extends MappedString(this, 128)
  object slug extends MappedString(this, 128)
  object body extends MappedText(this)
}

object Article extends Article with LongKeyedMetaMapper[Article]
