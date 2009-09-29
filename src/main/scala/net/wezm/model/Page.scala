package net.wezm.model

import net.liftweb._
import mapper._

class Page extends LongKeyedMapper[Page] with IdPK {
  def getSingleton = Page
  
  object author extends MappedLongForeignKey(this, User)
  object title extends MappedString(this, 128)
  object body extends MappedText(this)
}

object Page extends Page with LongKeyedMetaMapper[Page]
